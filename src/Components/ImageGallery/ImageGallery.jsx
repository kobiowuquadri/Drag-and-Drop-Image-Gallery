import React, { useState } from 'react';
import images from '../../Assets/Data/Data.json';
import './imagegallery.scss';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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
  const [sortedImages, setSortedImages] = useState(images);

  const onDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = sortedImages.findIndex((image) => image.id === active.id);
    const newIndex = sortedImages.findIndex((image) => image.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const updatedImages = arrayMove(sortedImages, oldIndex, newIndex);
      setSortedImages(updatedImages);
    }
  };

  return (
    <div className="main">
      <h1>MY GALLERY</h1>
      <div className="grid_container">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={sortedImages} strategy={verticalListSortingStrategy}>
            {sortedImages.map((image) => {
              return <SortableUser key={image.id} image={image} />;
            })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default ImageGallery;
