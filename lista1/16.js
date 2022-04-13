let nums = []
let sortedNums = []

for (let i = 0; i < 11; i++)
    nums[i] = prompt('insira o numero de sua escolha. (restam: ' + (10-i) + ')')

sortedNums = nums.sort((a, b) => {return b - a})