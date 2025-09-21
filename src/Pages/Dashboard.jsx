import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = () => {
      const mockPosts = [
        { id: 1, title: 'Primeiro Post do Blog', content: 'Este é o conteúdo do primeiro post.' },
        { id: 2, title: 'Segundo Post', content: 'Conteúdo de um post de teste.' },
      ];
      setPosts(mockPosts);
    };
    fetchPosts();
  }, []);

  const handleAddOrUpdatePost = (e) => {
    e.preventDefault();
    if (editingPostId) {
      setPosts(posts.map(post => 
        post.id === editingPostId ? { ...post, title: newPostTitle, content: newPostContent } : post
      ));
      setEditingPostId(null);
    } else {
      const newPost = {
        id: Date.now(),
        title: newPostTitle,
        content: newPostContent,
      };
      setPosts([...posts, newPost]);
    }
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleEditPost = (post) => {
    setEditingPostId(post.id);
    setNewPostTitle(post.title);
    setNewPostContent(post.content);
  };

  const handleDeletePost = (id) => {
    if (window.confirm('Tem certeza de que deseja deletar este post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    onLogout();
    navigate('/admin/login');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard de Posts</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Sair
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{editingPostId ? 'Editar Post' : 'Criar Novo Post'}</h2>
        <form onSubmit={handleAddOrUpdatePost}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postTitle">
              Título
            </label>
            <input
              type="text"
              id="postTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postContent">
              Conteúdo
            </label>
            <textarea
              id="postContent"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {editingPostId ? 'Atualizar Post' : 'Adicionar Post'}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Posts Existentes</h2>
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id} className="border p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.content}</p>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => handleEditPost(post)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded">
                    Editar
                  </button>
                  <button onClick={() => handleDeletePost(post.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                    Deletar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Nenhum post encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;