document.write('<h1>Matrix</h1>')

var matrix = [[1,2,3,4],
              [4,1,7,9],
              [3,5,9,3],
              [3,1,8,6]];
var n = matrix.length
var dai_sum =0;
for(let i =0;i<n;i++){
    document.write('<br>');

    for(let j =0;j<n;j++){
        document.write(matrix[i][j]);

        document.write(" ");

        if(i == j){
            dai_sum = dai_sum+matrix[i][j];
        }
    }
}

document.write('<br>')

document.write('<h1>Sum of daigonal elements</h1>')

document.write(dai_sum);
