let argv = process.argv
data = argv[2].slice(0, -1)
time=  parseInt(data)
if (data[-1]=== n) {
  time = time * 60}
let interval =setInterval( () => {
  time--
  console.log(`Left: ${time}s`)
  if (time === 0) {
  clearInterval(interval)
    process.exit()
  }
},1000);
