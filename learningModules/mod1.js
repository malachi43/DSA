const { read } = require('fs');
let fs = require('fs/promises');
const { runInThisContext } = require('vm');

// (async () => {
//     let fileHandle = await fs.open('out.txt', "r")
//     let readStream = fileHandle.createReadStream()
//     // process.stdin.on("data", chunk => {
//     //     writeStream.write(chunk.toString('utf-8'))
//     // })

//     readStream.on('data', chunk => {
//         console.log(chunk.toString())
//     })

//     readStream.on('end', () => {
//         console.log(`The file content has been successfully read from: [ ${__dirname}/${__filename} ]`)
//     })

//     readStream.on('error', (err) => {
//         console.log("Error message: ", err.message)
//     })


//     // process.stdin.on('end', ()=>{
//     //     console.log(`You file has been saved successfully.`)
//     // })
//     // process.stdin.resume()
// })()

let obj = {
    name: "Uko Chibuike Malachi",
    func: function () {
        console.log(this)

    },
    getTime: function () {
        let that = this
        setTimeout(function () {
            console.log(that)
        }, 1000)
    }
}

function Class(){
    this.name = 'aLAUSA'

}

Class.prototype.iterate = function(){
    console.log(this)
}

new Class().iterate()




obj.getTime()