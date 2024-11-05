import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import { communitiesData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [communities, setCommunities] = useState(communitiesData);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('communities_data'));
    if (data !== null && Object.keys(data).length !== 0) setCommunities(data);
  }, []);

  const handleEdit = id => {
    const [community] = communities.filter(community => community.id === id);
    setSelectedCommunity(community);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const updatedCommunities = communities.filter(community => community.id !== id);
        localStorage.setItem('communities_data', JSON.stringify(updatedCommunities));
        setCommunities(updatedCommunities);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'The community has been deleted.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteAll = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete all!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        localStorage.removeItem('communities_data');
        setCommunities([]);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'All communities have been deleted.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
            handleDeleteAll={handleDeleteAll} 
          />
          <Table
            communities={communities}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          communities={communities}
          setCommunities={setCommunities}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          communities={communities}
          selectedCommunity={selectedCommunity}
          setCommunities={setCommunities}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard; 
