

const myChart = new Chart(document.getElementById('stud'), {
    type: 'polarArea',
    data:{
        labels:[
            "Азербайджан", "Армения", "Казахстан", "Кыргызстан", "Молдова", "Россия", "Таджикистан", "Туркменистан", "Узбекистан", "Украина"
        ],
        datasets: [{
            label: 'Students 2022',
            data: [248, 190, 172, 204, 101, 1115, 201, 2264, 2285, 132],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(54, 102, 135)',
                'rgb(54, 12, 235)',
                'rgb(74, 162, 135)',
                'rgb(54, 62, 435)',],
            hoverBackgroundColor:[
                'rgb(255, 199, 232)',
                'rgb(175, 292, 292)',
                'rgb(255, 205, 186)',
            ]
        }]
    }
});

const mysecChart = new Chart(document.getElementById('magistr'), {
    type: 'polarArea',
    data:{
        labels:[
            "Азербайджан", "Армения", "Казахстан", "Кыргызстан", "Молдова", "Россия", "Таджикистан", "Туркменистан", "Узбекистан", "Украина"
        ],
        datasets: [{
            label: 'Students 2022',
            data: [10, 0, 16, 1, 1, 27, 11, 12, 41, 4],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(54, 102, 135)',
                'rgb(54, 12, 235)',
                'rgb(74, 162, 135)',
                'rgb(54, 62, 435)',],
            hoverBackgroundColor:[
                'rgb(255, 199, 232)',
                'rgb(175, 292, 292)',
                'rgb(255, 205, 186)',
            ]
        }]
    }
});

