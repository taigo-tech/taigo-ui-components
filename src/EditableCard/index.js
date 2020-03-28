import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../utils/colors';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const EditableCard = props => {
  const { editable, title, children, ...inputProps } = props;
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
    card: {
      color: theme.palette.primary.main,
      padding: '40px',
    },
    title: {
      fontWeight: 'bold'
    },
    divider: {
      height: 1,
      width: '100%',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      margin: '20px 0',
    }
  }))

  const styles = useStyles();
  console.log(children);
  return (
    <Card {...inputProps} className={styles.card}>
      <Typography component="h4" className={styles.title}>
        {title}
      </Typography>

      <div className={styles.divider} />

      {
        React.Children.map(children, child => React.cloneElement(child, { editable: editable }))
      }
    </Card>
  );
}

EditableCard.defaultProps = {
  editable: false
}

EditableCard.propTypes = {
  editable: PropTypes.bool
}

export default EditableCard;
