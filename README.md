# A stepper form, to be refactored and improved (stepper-form)

This is an app generated using the [Quasar Framework](https://quasar.dev/) and is meant to be refactored and improved to show your technical skills and proficiency in Vue.js.

The app consists off the following functionalities:

- **Authentication**: it now allows for any username to be logged in, you will just need to provide a complex enough password
- **User info form**: A 3 steps form page will be accessible once logged in
  - Personal info page
  - Professional info page
  - Publication page
  - Summary page
- **Logout**: it will clear the SessionStorage and redirect the user to the Authentication page

## Prerequisites

You will need node version ^18 || ^16 || ^14.19 to run the application on your local environment.
Create a git repository from this directory and publish it under your personal Github account. The expected deliverable for this test is a PR onto the _main_ or _master_ branch showcasing all the changes you made to the initial repo.

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev
```

## TODOS

Ideally, you will make one (1) commit for each of the following tasks:

- [ ] Create reusable components under the "src/components" directory as you see fit and use them in the "src/pages/SummaryPage.vue" page to minimise its length
- [ ] Add a link validation rule to the following code located in "src/pages/PublicationPage.vue"

  ```html
  <q-input outlined label="Field" v-model="work.link">
    <template v-slot:prepend>
      <q-icon name="link" />
    </template>
  </q-input>
  ```

  So that it will only accept valid http and https link, and display a red message under the input if the value typed is not a link.

- [ ] Implement a validation check for every attributes displayed in the **Summary Page**. A _green_ icon will be used for valid values, a _red_ icon for invalid values, according to the following rules:

  - firstname: required
  - lastname: (none)
  - birthdate: required, valid date
  - bio: (none)
  - professional:
    - english: required, positive number
    - french: required, positive number
    - german: required, positive number
    - degree:
      - title: required
      - field: (none)
      - year: required, valid year
      - details: (none)
    - published_works:
      - title: required
      - link: required, valid link
      - year: required, valid year

- [ ] Add a new step before the **Summary Page** displaying an **API Call Page**
      The **API Call Page** will make a call to [this endpoint](https://jsonplaceholder.typicode.com/users) using any library you see fit and display the users list in a [QList](https://quasar.dev/vue-components/list-and-list-items#qlist-api) component.
      The users list will contain a _name_, _username_ and _email_ as follow
  ```
  Leanne Graham (Bret)
  Sincere@april.biz
  ```
  You may display a [LoadingBar](https://quasar.dev/quasar-plugins/loading#installation) while the data is fetched, and a [Notify](https://quasar.dev/quasar-plugins/notify#notify-api) in case an error occured.

## General test criteria

You are free to make any changes to the whole codebase to gain performance, maintainability and improve user experience.
The main aspects we are looking for is:

- clean and readable code
- good use of Vue 3 API
- short template with reusable components
- separation of concerns among the different parts of the codebase
- your ability to explain and argue why you chose to refactor or change parts of the codebase
