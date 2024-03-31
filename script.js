const aray = [400, 122, 132, 111, 1100, 688, 900]

// {основное дз}

array.sort((a, b) => b - a);
console.log(array);

// {Доп дз}

for (let i = 0; i < aray.length; i++) {
    for (let aza = i + 1; aza < aray.length; aza++) {
        if (aray[i] < aray[aza]) {
            [aray[i], aray[aza]] = [aray[aza], aray[i]];
        }
    }
}
console.log(aray);


