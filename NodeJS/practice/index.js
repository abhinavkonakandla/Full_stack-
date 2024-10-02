/*var getName = require("sillyname");
var name = getName();
console.log(name);*/

/*
var hero = require("superheroes");
const rName = hero.randomSuperhero();
console.log(`my name is ${rName}`);*/

/*
--> fs.readFile()
--> fs.readFileSync()
--> fs.writeFile()
--> fs.writeFileSync()
--> fs.appendFile()
--> fs.appendFileSync()
--> fs.unlink()
--> fs.unlinkSync()
fs.readdir()
fs.readdirSync()
fs.mkdir()
fs.mkdirSync()
fs.rmdir()
fs.rmdirSync()
fs.stat()
fs.statSync()
fs.rename() – Rename or move a file or directory asynchronously.
fs.renameSync() – Synchronously rename or move a file or directory.
fs.copyFile() – Copies a file asynchronously.
fs.copyFileSync() – Synchronously copies a file.
fs.watch() – Watches for changes to a file or directory asynchronously.
fs.watchFile() – Watches a file for changes, providing more fine-grained control than fs.watch().
fs.exists() – Checks asynchronously if a file or directory exists (deprecated, use fs.access()).
fs.existsSync() – Synchronously checks if a file or directory exists.
fs.access() – Checks permissions for a file or directory asynchronously.
fs.accessSync() – Synchronously checks permissions for a file or directory.
fs.open() – Opens a file descriptor asynchronously.
fs.openSync() – Synchronously opens a file descriptor.
fs.close() – Closes a file descriptor asynchronously.
fs.closeSync() – Synchronously closes a file descriptor.
fs.truncate() – Truncates a file to a specified length asynchronously.
fs.truncateSync() – Synchronously truncates a file to a specified length.
fs.chmod() – Changes the permissions of a file asynchronously.
fs.chmodSync() – Synchronously changes the permissions of a file.
fs.fstat() – Retrieves file status based on a file descriptor asynchronously.
fs.fstatSync() – Synchronously retrieves file status based on a file descriptor.


*/

//         FS    

/*

This code explains how to use readFile method and encode it.

import { readFile } from 'node:fs';

readFile('input.js','UTF-8', (err, data) => {
  if (err) throw err;
    console.log(data);
});
*/
/*

The above code represents writeFile method to write something to the destination file.

import fs from 'node:fs';
fs.writeFile('input.txt','//my name is abhinav','utf-8',(err)=>{
  if(err) throw err;
  console.log("file saved sucessfully");
})*/
/*

This above code represents the readFileSync method.

import fs from 'node:fs';
console.log(fs.readFileSync('input.txt','utf-8'));
*/

/*
This above code represents the writefilesync method
return type in undefined.

import {writeFileSync} from 'node:fs';
writeFileSync('input.txt','// this code is from the writefilesync block','utf-8');
*/
/*

This content describes appending the content to the destination file

import {appendFile} from 'node:fs';
appendFile('input.txt','// this data is from appendfile.','utf-8',(err)=>{
  if(err) throw err;
  console.log("content appended successfully!");
});
*/
/*

This content describes about the appendFileSync 

import {appendFileSync} from 'node:fs';
appendFileSync('input.txt','// this is from appendfilesync','utf8',(err)=>{
  if(err) throw err;
  console.log("appended successfullyyyy!");
})
*/

/*

This above code represents the unlink the file or folder from the existing 
file (it deletes the file or folder).

import {unlink,writeFile} from 'node:fs';

writeFile('input.txt','//this is abhinav','utf-8',(err)=>{
  if(err) throw err;
  console.log("content overrided successfully!..");
})


unlink('input.txt',(err)=>{
  if(err) throw err;
  console.log("unlinked the text file successfully!..");
})
*/

/*

This code represents the unlinkSync 
it unlinks the file synchronously.

import {writeFile,unlinkSync} from 'node:fs';
writeFile('input.txt','//this text is to unlinksync','utf-8',(err)=>{
  if(err) throw err;
  console.log("content overrided successfully!..");
})

unlinkSync('input.txt');
*/
/*

This above code represents the readdir 
it reads and prints the files in that directory 
in an array.

import {readdir} from 'node:fs';
readdir('node_modules','utf-8',(err,files)=>{
  if(err) throw err;
  console.log(files);
})
*/






