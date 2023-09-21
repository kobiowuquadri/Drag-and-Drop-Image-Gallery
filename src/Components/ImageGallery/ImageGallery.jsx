import React, { useState, useEffect } from 'react';
import images from '../../Assets/Data/Data.json';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getAuth } from 'firebase/auth';
import { RingLoader } from 'react-spinners';
import './imagegallery.scss';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';

const SortableUser = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: image.id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="image_container"
      key={image.id}
    >
      <img src={image.img} alt="" />
    </div>
  );
};

function ImageGallery() {
  const [isLoading, setIsLoading] = useState(true)
  const [sortedImages, setSortedImages] = useState(images);
  const auth = getAuth()

  const onDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = sortedImages.findIndex((image) => image.id === active.id);
    const newIndex = sortedImages.findIndex((image) => image.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const updatedImages = arrayMove(sortedImages, oldIndex, newIndex);
      setSortedImages(updatedImages);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div id='main_container'>
      {isLoading ? (
        <div className='loading'>
          <RingLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <Header />
          <HeroSection />
          <div className="main">
            <h1>MY GALLERY</h1>
            <div className="grid_container">
              {auth.currentUser ? (
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                  <SortableContext items={sortedImages} strategy={verticalListSortingStrategy}>
                    {sortedImages.map((image) => {
                      return <SortableUser key={image.id} image={image} />;
                    })}
                  </SortableContext>
                </DndContext>
              ) : (
                sortedImages.map((image) => {
                  return <SortableUser key={image.id} image={image} />;
                })
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default ImageGallery;
