import React from 'react';
import { Row, Col } from 'antd';
import CollectionItem from '../../Components/CollectionItem';
import collectionImage1 from '../../asset/images/collectionlist/01_PopularDestination_Luxury.jpg';
import collectionImage2 from '../../asset/images/collectionlist/02_PopularDestination_Sneakers.jpg';
import collectionImage3 from '../../asset/images/collectionlist/03_PopularDestination_Tire.jpg';
import collectionImage4 from '../../asset/images/collectionlist/ECM_PopularDestination_Reburbished.jpg';
import collectionImage5 from '../../asset/images/collectionlist/05_PopularDestination_Cards.jpg';
import collectionImage6 from '../../asset/images/collectionlist/06_PopularDestination_PreLoved.jpg';
import collectionImage7 from '../../asset/images/collectionlist/07_PopularDestination_Toys.jpg';
import collectionImage8 from '../../asset/images/collectionlist/01_PopularDestination_Luxury.jpg';

const CollectionList = () => {
  return (
    <div className='mt-8'>
      <p style={{ fontSize: '24px' }} className="text-left text-black mb-4">
        Trending on eBay
      </p>
      <Row gutter={[16, 16]}>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage1} title={'Luxury'} />
        </Col>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage2} title={'Sneakers'} />
        </Col>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage3} title={'P&A'} />
        </Col>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage4} title={'Refurbished'} />
        </Col>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage5} title={'Trading cards'} />
        </Col>
        <Col span={3}>
          <CollectionItem
            imageSrc={collectionImage6}
            title={'Pre-loved Luxury'}
          />
        </Col>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage7} title={'Toys'} />
        </Col>
        <Col span={3}>
          <CollectionItem imageSrc={collectionImage8} title={'Luxury'} />
        </Col>
      </Row>
    </div>
  );
};

export default CollectionList;
