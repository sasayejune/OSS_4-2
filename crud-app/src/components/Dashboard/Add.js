import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ communities, setCommunities, setIsAdding }) => {
  const [communityName, setCommunityName] = useState('');
  const [number, setNumber] = useState('');
  const [meaning, setMeaning] = useState('');
  const [memberNum, setMemberNum] = useState('');
  const [Birthdate, setBirthdate] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    // 필드 유효성 검사
    if (!communityName || !number || !meaning || !memberNum || !Birthdate) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = communities.length + 1;
    const newCommunity = {
      id,
      communityName,
      number,
      meaning,
      memberNum,
      Birthdate,
    };

    communities.push(newCommunity);
    localStorage.setItem('communities_data', JSON.stringify(communities));
    setCommunities(communities);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${communityName} has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Community</h1>
        <label htmlFor="communityName">Community Name</label>
        <input
          id="communityName"
          type="text"
          value={communityName}
          onChange={e => setCommunityName(e.target.value)}
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <label htmlFor="meaning">Meaning</label>
        <input
          id="meaning"
          type="text"
          value={meaning}
          onChange={e => setMeaning(e.target.value)}
        />
        <label htmlFor="memberNum">Number of Members</label>
        <input
          id="memberNum"
          type="number"
          value={memberNum}
          onChange={e => setMemberNum(e.target.value)}
        />
        <label htmlFor="Birthdate">Birthdate</label>
        <input
          id="Birthdate"
          type="date"
          value={Birthdate}
          onChange={e => setBirthdate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
