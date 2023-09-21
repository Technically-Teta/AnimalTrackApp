import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
 

const SightCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.nickname}</Card.Title>
                <Card.Subtitle className="structure">Nickname:{props.nickname}</Card.Subtitle>
                <Card.Text>
                    Location: {props.location}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

// PropTypes validation
SightCard.propTypes = {
    nickname: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default SightCard;
