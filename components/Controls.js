import Button from './Button'
import Input from './Input'
import Icon from './Icon'
import toCamelCase from '../modules/toCamelCase'
import toKebabCase from '../modules/toKebabCase'

export default (props) =>
  <menu className="Controls">
    <Input
        className={'Control'}
        id="file-upload" 
        label={
            <React.Fragment>
                <span className="Control__label">Add</span>
                <Icon 
                    ariaHidden='true'
                    className='Control__icon' 
                    icon='add' 
                />
            </React.Fragment>
        }
        multiple={true}
        onChange={props.loadFiles}
        type="file"
    />
    <Button
        className={'Control'}
        id={'play'}
        onClick={props.play}
    >
        <span className="Control__label">Play</span>
        <Icon 
            ariaHidden='true'
            className='Control__icon' 
            icon='play' 
        />
    </Button>
    <Button
        className={'Control'}
        id={'pause'}
        onClick={props.pause}
    >
        <span className="Control__label">Pause</span>
        <Icon 
            ariaHidden='true'
            className='Control__icon' 
            icon='pause' 
        />
    </Button>
    <Button
        className={'Control'}
        id={'previous'}
        onClick={props.previousTrack}
    >
        <span className="Control__label">Previous</span>
        <Icon 
            ariaHidden='true'
            className='Control__icon' 
            icon='previous' 
        />
    </Button>
    <Button
        className={'Control'}
        id={'next'}
        onClick={props.nextTrack}
    >
        <span className="Control__label">Next</span>
        <Icon 
            ariaHidden='true'
            className='Control__icon' 
            icon='next' 
        />
    </Button>
  </menu>
