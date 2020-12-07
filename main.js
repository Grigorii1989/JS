let summ = 0;
let arr = new Array();
for (let i = 0; i < 6; i++) {
  arr[i] = i * 5;
  summ += arr[i]
  console.log (arr[i]); 
}

arr.reverse();

console.log ( summ + '/2 =' + (summ/2));
  console.log (summ/2);
  console.log(arr[0]);
  console.log (arr[1] + 'Предпоследний элемент')
  
  let styles = ['Джаз', 'Блюз'];
  let addst3 = styles.concat('Rok-n-Roll');
  addst3.reverse();
  addst3.splice(1,1,'Классика');
  addst3.reverse();
  let addst2 = addst3.splice(0,1);
  addst3.splice(0,0,'Рэп', 'Регги')
  console.log (addst2);
  console.log ( addst3)