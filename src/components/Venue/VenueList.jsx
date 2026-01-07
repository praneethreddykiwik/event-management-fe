/** @format */

import styled from 'styled-components';
import VenueCard from './VenueCard';
import { useState } from 'react';
import MapModal from './MapModal';

const venues = [
  {
    name: 'Taj Falaknuma Palace',
    address: 'Hyderabad, Telangana',
    type: 'Hall',
    description: 'Royal palace venue with luxury architecture.',
    image:
      'https://bradajohnson.net/wp-content/uploads/2017/01/IMG_1547_Aurora2017_HDR-2.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.527428821409!2d78.4565585749342!3d17.331920783512098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9688e8365a09%3A0x3f323f7fd5401397!2sTaj%20Falaknuma%20Palace!5e0!3m2!1sen!2sin!4v1704620200000!5m2!1sen!2sin',
  },
  {
    name: 'Bangalore Palace Grounds',
    address: 'Bengaluru, Karnataka',
    type: 'Hall',
    description: 'Iconic heritage palace for weddings and concerts.',
    image: 'https://i.ytimg.com/vi/wZWS7X7C9GE/maxresdefault.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.01360239664!2d77.59211057393738!3d12.998690216307902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1647f0e2a76f%3A0x6f9720935525b1c2!2sBangalore%20Palace!5e0!3m2!1sen!2sin!4v1704620400000!5m2!1sen!2sin',
  },
  {
    name: 'Umaid Bhawan Palace',
    address: 'Jodhpur, Rajasthan',
    type: 'Hall',
    description: 'World-famous royal wedding palace.',
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/756523266.jpg?k=4c1c5d82e53cad6c6159a354663f9b44b9738602c58b9dda9ddd7f116cb0c85f&o=',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4030850078357!2d73.0447272753068!3d26.281029777029318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418cfa2d57b3f7%3A0xccd024507880be71!2sUmaid%20Bhawan%20Palace%2C%20Jodhpur!5e0!3m2!1sen!2sin!4v1767780509677!5m2!1sen!2sin',
  },
  {
    name: 'Ramoji Film City',
    address: 'Hyderabad',
    type: 'Convention',
    description: 'Huge destination wedding venue with film sets.',
    image:
      'https://traveltradejournal.com/wp-content/uploads/2024/07/Ramoji-Film-City-_Movie-Magic-Top-View.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.209981857394!2d78.68050197493667!3d17.25433168356544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0cf3cb7b4e2d%3A0x7a2a5f06c574ea7!2sRamoji%20Film%20City!5e0!3m2!1sen!2sin!4v1704620666666!5m2!1sen!2sin',
  },
  {
    name: 'Leela Palace',
    address: 'Chennai, Tamil Nadu',
    type: 'Hall',
    description: '5-star venue beside the sea.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/69/50/spread-over-85-acres.jpg?w=900&h=500&s=1',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.710944622207!2d80.27898077387925!3d12.999514314509841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d72d1d4b589%3A0x77a3dbfc0a76d2c8!2sThe%20Leela%20Palace%20Chennai!5e0!3m2!1sen!2sin!4v1704620777777!5m2!1sen!2sin',
  },
  {
    name: 'JW Marriott',
    address: 'Mumbai',
    type: 'Banquet',
    description: 'Luxury indoor banquet hall.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=900&h=500&s=1',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.132317846647!2d72.821352379615!3d19.101850335974873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf6271e62d%3A0x12861889e9de122a!2sJW%20Marriott%20Mumbai%20Juhu!5e0!3m2!1sen!2sin!4v1767780620880!5m2!1sen!2sin',
  },
];

const VenueList = () => {
  const [openMap, setOpenMap] = useState(null);

  return (
    <>
      <Grid>
        {venues.map((v, i) => (
          <VenueCard key={i} venue={v} onView={() => setOpenMap(v.map)} />
        ))}
      </Grid>

      <MapModal mapUrl={openMap} onClose={() => setOpenMap(null)} />
    </>
  );
};

export default VenueList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
