# Niko Tempo React Challenge

> This is my solution to the Tempo's Frontend chanllenge.

## How to execute the project

To execute the project run the following command:

  ```shell
    npm run develop
  ```

The application will be available on http://localhost:8000


## Explanation

The architecture was diveded on several layers as the following:

1. Components
2. Hooks
3. Services
4. Repositories

The **Components** were intended to only render their corresponding HTML elements.

The **Hooks** were implemented as custom hooks as a way to encapsulate state logic.

The **Services** were the layer in charge of data manipulation and retrieval.

The **Repositories** were the ones related to persistence and "low-level" operations.

The main idea was to make services agnostic to the undelying layer.
By injecting a repository when creating the services, I force a decoupling mechanism allowing me to replace the persistence layer to whatever system or mechanisms I want. 
This is inspired by **Clean Architecture** and uses some **SOLID** principles.

I also decided to use a design pattern called **Factory Pattern** to make code more mantainable and readable.

Due to the lack of time I decide to send the challenge as it is, since "it's better done than perfect".


