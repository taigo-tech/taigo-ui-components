import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../utils/colors.scss';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';

const EditableCard = props => {
  const { children, type, color, ...inputProps } = props;
  const theme = useTheme();

  const useStyles = makeStyles(theme => ({
    close: {
      position: 'absolute',
      top: `${theme.spacing(1)}px`,
      right: `${theme.spacing(1)}px`,
      color: theme.palette.grey[300],
      padding: 0,
    },
    icon: {
      color: theme.palette.error.main,
      marginBottom: `${theme.spacing(2)}px`
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: '600',
      color: theme.palette.grey[900]
    }
  }))

  const styles = useStyles();

  return (
    <Card {...inputProps}>
      asdasd
    </Card>
  );
}

EditableCard.propTypes = {

}

export default EditableCard;
