export const dateFormat = (d) => {
        
    let date = d.getDate();
    if (date < 10) date = '0' + date;
  
    let month = d.getMonth() + 1;
    if (month < 10) month = '0' + month;
  
    let year = d.getFullYear() % 100;
    if (year < 10) year = '0' + year;
  
    let hour = d.getHours()
    if (hour < 10) hour = '0' + hour;
  
    let minutes = d.getMinutes()
    if (minutes < 10) minutes = '0' + minutes;


    return `${date}/${month}/${year}, ${hour}:${minutes}`;
}

const contactsData = [
    {
        id: 1,
        fullName: 'Alina',
        avatar: 'https://www.ejin.ru/wp-content/uploads/2018/11/devushka-shatenka-e1543572030871.jpg',
        messages: [
            {text: 'Hi from Alina!', datestamp: dateFormat(new Date(2019, 0, 30, 12, 10, 10)), chatRecivier: false},
            {text: 'Hello from me!', datestamp: dateFormat(new Date(2019, 0, 30, 12, 14, 16)), chatRecivier: true },
            {text: 'How are you?', datestamp: dateFormat(new Date(2019, 0, 30, 12, 15, 16)), chatRecivier: false },
            {text: 'Thank you i am fine!', datestamp: dateFormat(new Date(2019, 0, 30, 12, 16, 16)), chatRecivier: true },

        ]
    },
    {
        id: 2,
        fullName: 'Kathrine',
        avatar: 'https://cdn.lifehacker.ru/wp-content/uploads/2018/04/people-2564026_1920_1524653420-e1524653446332.jpg',
        messages: [
            {text: 'Hi, i am Kathrine!', datestamp: dateFormat(new Date(2019, 0, 30, 12, 10, 10)), chatRecivier: false},
            {text: 'Nice to meet you!', datestamp: dateFormat(new Date(2019, 0, 30, 12, 14, 16)), chatRecivier: true },
            {text: 'Can you borrow me 2 dollars', datestamp: dateFormat(new Date(2019, 0, 30, 12, 15, 16)), chatRecivier: false },
            {text: 'No, sorry', datestamp: dateFormat(new Date(2019, 0, 30, 12, 16, 16)), chatRecivier: true },
        ]
    },
    {
        id: 3,
        fullName: 'Volodymyr',
        avatar: 'https://pbs.twimg.com/profile_images/1146411705838309376/PnIZ6OYH_400x400.jpg',
        messages: []
    },
    {
        id: 4,
        fullName: 'Andriy',
        avatar: 'https://pbs.twimg.com/profile_images/1146411705838309376/PnIZ6OYH_400x400.jpg',
        messages: []
    },
    {
        id: 5,
        fullName: 'John',
        avatar: 'https://pbs.twimg.com/profile_images/1146411705838309376/PnIZ6OYH_400x400.jpg',
        messages: []
    },
]



export default contactsData