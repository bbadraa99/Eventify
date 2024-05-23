import React from 'react';

interface ListItem {
  id: number;
  text: string;
}

interface ListProps {
    description: string;
    item?: string;
}

const List: React.FC<ListProps> = ({ description, item }) => {
  const listItems: ListItem[] = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    text: `Item ${index + 1}`
  }));
  if (description === "To do" && item) {
    listItems.push({ id: listItems.length, text: item });
  }

  return (
    <div className='bg-white shadow rounded-xl p-4 w-1/3 h-[600px]'>
        <p className='bold-20 text-black center py-4'>{description}</p>
        <div className="h-[500px] overflow-y-scroll">
            {listItems.map((item) => (
                <div 
                  key={item.id} 
                  className="p-2 hover:bg-gray-100 rounded-md cursor-pointer" 
                  draggable="true"
                >
                  {item.text}
                </div>
            ))}
        </div>
    </div>
  );
};

export default List;