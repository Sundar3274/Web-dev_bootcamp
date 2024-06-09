# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Day 7: Web Development Bootcamp by LiveWires

Welcome to Day 7 of the Web Development Bootcamp organized by LiveWires! Today's session focused on integrating Firebase Firestore with a React application and deploying the website to Cloudflare. Below is a detailed summary of what we learned:

## Firebase Firestore Operations

### Adding a Document (`addDoc`) and Updating a Document (`updateDoc`)

The `addDoc` function is used to add a new document to a specified collection in Firestore. 
The `updateDoc` function is used to update an existing document in Firestore. Here is an example:
Here, we are using if-else statement to define a condition to perform either addDoc or updateDoc.


```javascript
  const Onsubmit = async() => {
    setNewtask('')
    if (Edittask) {
      const updateref = doc(db,'taskscollection',Edittask.id)
      await updateDoc(updateref,{text:Newtask})
      setEdittask(null)} 
  else {
   await addDoc(taskref,{text:Newtask,completed:false})
  }
  }
```

### Deleting a Document (`deleteDoc`)

The `deleteDoc` function is used to delete a document from Firestore. Here's how you can do it:

```javascript
  const deletetask = async(task) => {
    const docref = doc(db,'taskscollection',task.id)
    await deleteDoc(docref)
  }
```

## Integrating Firestore with React

To integrate these Firestore operations in a React application, you will need to:

1. **Configure Firebase**: Make sure Firebase is configured in your project.
2. **Create Firestore Functions**: Implement the `addDoc`, `updateDoc`, and `deleteDoc` functions as shown above.
3. **Use Firestore Functions in Components**: Call these functions within your React components, typically in response to user actions like form submissions or button clicks.

## Deploying to Cloudflare

### Steps to Deploy

1. **Sign Up/Login**: Sign up or log in to your Cloudflare account.
2. **Create a New Project**: Navigate to the Cloudflare dashboard and create a new project.
3. **Connect Repository**: Connect your GitHub (or other version control) repository containing your React project.
4. **Configure Build Settings**: Set the build settings, typically the build command (`npm run build`) and the output directory (`build`).
5. **Deploy**: Click on deploy, and Cloudflare will handle the rest.

### Benefits of Using Cloudflare

- **Global CDN**: Ensures fast loading times by serving content from the nearest server.
- **Security**: Provides enhanced security features like DDoS protection.
- **Easy Integration**: Smooth integration with popular version control systems and CI/CD pipelines.

This concludes Day 7 of our bootcamp. We have learned how to perform CRUD operations with Firebase Firestore and integrate them with a React application, as well as how to deploy our application to Cloudflare. Happy coding!
