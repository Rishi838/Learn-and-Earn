import { getData, postData } from '../../../../utils/task_page_components/fetch_api.js'
// js for practice questions where we also tell the correct answer if selected answer is wrong
var correct_answer = [2, 3];
const grey = "rgb(34, 33, 34)"
const red = " rgb(255, 68, 68,0.4)"
const green = "rgb(0, 200, 81,0.5)"

for (let i = 1; i <= correct_answer.length; i++) {
  for (let j = 1; j <= 4; j++) {
    document.getElementById(`block-${i}-${j}`).addEventListener('click', () => {
      let cor = correct_answer[i - 1]
      if (j == cor) {
        for (let k = 1; k <= 4; k++)
          document.getElementById(`block-${i}-${k}`).style.backgroundColor = grey
        document.getElementById(`block-${i}-${j}`).style.backgroundColor = green
      }
      else {
        for (let k = 1; k <= 4; k++)
          document.getElementById(`block-${i}-${k}`).style.backgroundColor = grey
        document.getElementById(`block-${i}-${j}`).style.backgroundColor = red
        document.getElementById(`block-${i}-${cor}`).style.backgroundColor = green
      }
    })
  }
}
// let elem = document.getElementById('q1')
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }

function move(req,res){
  let timer = setInterval(hello,1000)
  async function hello(){
   let resp= await postData('/t2',{})
   console.log(resp.a)
   if(resp.a==0)
   {
    clearInterval(timer)
   }
  }
  }
  
document.getElementById('start_quiz').addEventListener('click', async() => {
  let status = await postData('/programming/task/1',{email:"rishidhingra04@gmail.com"})
  console.log(status)
}
)

// window.onbeforeunload = function () {
//   return "Data will be lost if you leave the page, are you sure?";
// };
