const getdata = () => {
    setTimeout(() => {
        console.log("fetching data from API")
        const roll_no = [1, 2, 3, 4, 5, 6];
        console.log(roll_no);
        setTimeout((rollno) => {
            const biodata = {
                name: "manoj",
                age: 23
            }
            console.log(`${rollno}) my name is ${biodata.name} and my age is ${biodata.age}`);
            setTimeout((name) => {
                biodata.gender = 'male';
                console.log(`${rollno}) my name is ${biodata.name} and my age is ${biodata.age} he is ${biodata.gender}`);
            }, 2000, biodata.name)
        }, 2000, roll_no[1])
    }, 2000);
}
getdata();