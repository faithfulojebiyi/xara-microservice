
# Xara 
## A template and category Microservice





## Installation

Clone the repo from the git repository

Run the following command in your root directory

```bash
  npm Install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

look at the example in `.env.example`

`DATABASE_URL`

`NODE_ENV`

  


  ### To start your dev server 

  Run the following command in your root directory

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
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


  