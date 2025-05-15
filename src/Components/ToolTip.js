
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './Responsive.css';
export default function ToolTip(props) {


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover </Popover.Header>
            <Popover.Body>
                And here's some <strong>amazing</strong> content.
            </Popover.Body>
        </Popover>
    );



    return (
        <>
            <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
                <div >hiiiiii</div>
            </OverlayTrigger>
        </>
    );




}