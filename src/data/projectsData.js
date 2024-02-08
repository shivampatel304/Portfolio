import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Distributed Movie Ticket Booking System',
        projectDesc: 'Designed and develop a fault-tolerant movie ticket booking system, achieving availability and faster response time in Java. Implemented Unicast/Multicast UDP for 3-second failover, reducing downtime, contributing to an increase in project efficiency.',
        tags: ['Java', 'RMI', 'System Design'],
        code: 'https://github.com/shivampatel304/Distributed_MovieTicketBookingSystem_Using_JavaRMI',
        demo: 'https://github.com/shivampatel304/Distributed_MovieTicketBookingSystem_Using_JavaRMI',
        image: one
    },
    {
        id: 2,
        projectName: 'Contest Reminder',
        projectDesc: 'Implemented an Email subscription service that reminds competitive programming contests hosted on platforms such as Codechef, Hackerrank, LeetCode etc.',
        tags: ['ReactJs', 'NodeJs', 'Selenium','Amazon SES'],
        code: 'https://github.com/shivampatel304',
        demo: 'https://github.com/shivampatel304',
        image: two
    },
    {
        id: 3,
        projectName: 'Machine Learning: Eye For Blind',
        projectDesc: 'Created an app for the visually impaired, utilizing TensorFlow Lite for object distance prediction, OCR for text recognition, and Gmap for route suggestions. The application is voice-controlled, offering recommending routes and transportation methods.',
        tags: ['TensorFlow Lite', 'Android Studio', 'Java', 'Google API'],
        code: 'https://github.com/shivampatel304/Inventory-Management-Application',
        demo: 'https://github.com/shivampatel304/Inventory-Management-Application',
        image: three
    },
    {
        id: 4,
        projectName: 'Indexing Framework for 3D Spatial Data',
        projectDesc: 'Designed a high-performance tree-based spatial index for a 10 million 3D point dataset, optimizing cube and nearest neighbor queries. Emphasis on scalability and speed for efficient spatial query processing in 3D point clouds, detailed in a concise report.',
        tags: ['Java', 'Algorithm', 'Data Structure'],
        code: 'https://github.com/shivampatel304/Indexing-Framework-for-3D-Spatial-Data',
        demo: 'https://github.com/shivampatel304/Indexing-Framework-for-3D-Spatial-Data',
        image: four
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/