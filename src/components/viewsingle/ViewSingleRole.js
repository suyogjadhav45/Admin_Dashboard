import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  max-height: 900px;
  margin: auto;
`;

const Image = styled.img`
  width: 275px;
  height:auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const ViewSingleRole = (props) => {
  
  const {obj,role}=props;
  console.log(obj);


  const state = require('country-state-city').State;
  const statelist = state.getStatesOfCountry("IN");

  const statename=statelist.find((s)=>s.isoCode===obj.state);

  return (
   

      <Container className='bg-tailtertiary m-3'>
        <div className='flex-col mx-4'>

          <Image className='rounded-lg max-w-md mx-auto border-2 border-black' src={`${obj.agentimage}`} alt="image" />
          <div className="flex ">
            <p className='px-3 mx-auto py-1 border-2 border-blue-500 bg-tailtertiary3 rounded-md'>{role}</p>
          </div>
        </div>

        <br />
        <div className='flex-col'>
          <h2 className='text-black font-bold border-2 border-blue-500 bg-tailprimary rounded-md text-xl px-3 py-2 mx-2'>{obj.firstname+" "+obj.lastname}</h2>
          <p className='border-2 border-blue-500 px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Email : {obj.email}</p>
          <p className='border-2 border-blue-500 px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Contact : {obj.contact} </p>
          <p className='border-2 border-blue-500 px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>{(obj.state)?"State : "+statename.name:"Pin : "+obj.pin}</p>
          <p className='border-2 border-blue-500 px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>City : {obj.city}</p>
          <p className='border-2 border-blue-500 px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Address : {obj.address}</p>

        </div>

      </Container>
      
  );
};

export default ViewSingleRole;
