
# Xara 
## A template and category Microservice





## Installation

Clone the repo from the git repository

Run the following command in your root directory

```bash
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

look at the example in `.env.example`

`DATABASE_URL` Mongodb connection string for dev database

`TEST_DATABASE_URL` Mongodb connection string for test database

`NODE_ENV` Your current node environment your default should be `development`

  


  ### To start your dev server 

  Run the following command in your root directory

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command make sure you kill your dev server

```bash
  npm test
```

  
## API Reference

#### Create category

```http
  POST /api/v1/category/create
```

| Request Body Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `displayName` | `string` | **Required**. Name of the category |
| `categoryId`  | `string` |**Default**  `Null` The category to be added to |

#### Move category

```http
  PATCH /api/v1/category/move/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the category to be moved |

| Request Body Data | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `toCategoryId`      | `string` | **Required**. The id of the category to move to |



#### Delete category

```http
  DELETE /api/v1/category/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of category to be deleted|

#### Create template

```http
  POST /api/v1/template/create
```

| Request Body Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `displayName` | `string` | **Required**. Name of the template |
| `categoryId`  | `string` |**Default**  `Null` The category to be added to |

### Additional Info
All logs are inside the `log` folder 


## 🚀 About Me
### My name is Faithful Ojebiyi. 
I am a framework-agnostic Backend Heavy Javascript developer;

- 🌱 I’m currently learning how to build D3Apps using blockchain
- 🖥 My current development stack is Nodejs, MongoDB, PostgreSQL, MySQL, Redis Expressjs React, Vuejs, Nextjs, Nuxt, Python, Flask, Docker, 
- 📫 How to reach me: [faithfulojebiyi@gmail.com](mailto:faithfulojebiyi@gmail.com)
- 😄 Pronouns: He/Him
- ⚡ Fun fact: I turn coffee to code and music keeps me going. I am a perfectionist
- 🏅 Github Profile Visits ![Visitor Count](https://profile-counter.glitch.me/faithfulojebiyi/count.svg)
