let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro excepturi assumenda, culpa cupiditate, veritatis nobis rerum blanditiis necessitatibus dolorum amet sed voluptatum aspernatur impedit ducimus veniam dicta itaque ratione!",
};
  
let aboutMeInfo = {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe nostrum illum voluptate repellat, praesentium provident accusantium impedit expedita consectetur voluptatibus nihil voluptatum incidunt ipsam magni ipsum mollitia. Aut, velit?",
    fullName: "Trần Minh Cường",
    age: "29",
    languages: ["English", "Spanish"],
    phone: "+84 973712395",
    email: "cuongtm2@rikkeisoft.com",
    address: "Km10 Nguyễn Trãi, Hà Đông, Hà Nội",
    skills: [
      {
        id: 1,
        name: "Photoshop",
        percentage: 87,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        id: 2,
        name: "HTML",
        percentage: 80,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        id: 3,
        name: "PHP",
        percentage: 95,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        id: 4,
        name: "Javascript",
        percentage: 70,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
    ],
};
  
let projects = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Auto Drive Project",
      subTitle: "3D Graphic design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "18-2-2022",
      client: "Symphony",
      techs: ["Angular", "React", "Jquery"],
      type: "Ecommerce",
      url: "www.project.com",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Show Mania - Entertainment",
      subTitle: "Web design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "19-2-2023",
      client: "Cillian Murphy",
      techs: ["Angular", "Jquery"],
      type: "Entertainment",
      url: "www.project.com",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "WorldToday - Portal",
      subTitle: "Web design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "20-3-2023",
      client: "Tony Motana",
      techs: ["Angular", "Jquery", "Vue"],
      type: "Web-frontend Development",
      url: "www.project.com",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Doctory - Healthcare",
      subTitle: "Web design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "31-1-2024",
      client: "Keira Knightly",
      techs: ["Angular", "Jquery", "Nodejs"],
      type: "Entertainment",
      url: "www.project.com",
    },
];

// lưu trữ dữ liệu lên localStorage
localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
localStorage.setItem("aboutMeInfo", JSON.stringify(aboutMeInfo));
localStorage.setItem("projects", JSON.stringify(projects));

