const {spawn} = require('child_process');
const path = require('path');
const cron = require('node-cron');
require("dotenv").config();

const DB_NAME = 'backup_mongodb';
const ARCHIVE_PATH = path.join(__dirname, 'backup', `${DB_NAME}.gz`);

// Scheduling the backup every day at 00:00
cron.schedule('0 0 * * *', () => backupMongoDB());

function backupMongoDB() {
    const child = spawn('mongodump', [
        '--uri', `${process.env.MONGO_DB}`,
        '--gzip',
        `--archive=${ARCHIVE_PATH}`,
    ]);

    child.stdout.on('data', (data) => {
        console.log('stdout:\n', data);
    });
    child.stderr.on('data', (data) => {
        console.log('stderr:\n', Buffer.from(data).toString());
    });
    child.on('error', (error) => {
        console.log('error:\n', error);
    });
    child.on('exit', (code, signal) => {
        if (code) console.log('Process exit with code:', code);
        else if (signal) console.log('Process killed with signal:', signal);
        else console.log('Backup is successfull ✅');
    });
}