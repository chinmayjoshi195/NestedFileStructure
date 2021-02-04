import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Tree = ({ data }) => {
  const [treeData, setData] = useState(data);

  const renderNode = (items) => {
    const onItemClick = (e, index) => {
      e.stopPropagation();
      if (items[index].isOpen === true) {
        items[index].isOpen = false;
      } else {
        items[index].isOpen = true;
      }
      setData([...data, items]);
    };
    return items.map((item, index) => {
      return (
        <Row onClick={(e) => onItemClick(e, index)}>
          <Col style={{ marginLeft: '25px' }}>
            * {item.label}
            {item.nestedValues && item.isOpen
              ? renderNode(item.nestedValues)
              : ''}
          </Col>
        </Row>
      );
    });
  };
  return (
    <Container>
      <Row>
        <Col>{renderNode(treeData)}</Col>
      </Row>
    </Container>
  );
};
export default Tree;
