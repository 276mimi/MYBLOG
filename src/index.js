import React from 'react';
import ReactDOM from 'react-dom/client';
import { PostProvider } from './Components/PostContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import UserProfile from './pages/UserProfile';
import Logout from './pages/LogOut';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Posts from './Components/Posts'

import './index.css';

// Define routes correctly
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout component that wraps pages
    errorElement: <ErrorPage />, // Error page for invalid routes
    children: [
      { index: true, element: <Home /> }, // Home page as the index route
      { path: 'create', element: <CreatePost /> }, // Route to create a post
      { path: 'post/:id', element: <PostDetail /> }, // Dynamic route for post details
      { path: 'posts/categories/:category', element: <CategoryPosts /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'authors', element: <Authors /> },
      { path: 'posts/users/:id', element: <AuthorPosts /> },
      { path: 'posts/:id/edit', element: <EditPost /> },
      { path: 'posts/:id/delete', element: <DeletePost /> },
      { path: '/posts', element: <Posts/> },
      { path: 'myposts/:id', element: <Dashboard /> },
      { path: 'logout', element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the router in the PostProvider so posts are available throughout the app
root.render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </React.StrictMode>
);
