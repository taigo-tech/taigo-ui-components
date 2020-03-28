import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import colors from '../utils/colors';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import EditableContext from '../context/EditableContext';

const EditableCard = props => {
  const { onAccept, title, children, ...inputProps } = props;
  const theme = useTheme();
  const [editable, setEditable] = useState(false);

  const useStyles = makeStyles(theme => ({
    close: {
      position: 'absolute',
      top: `${theme.spacing(1)}px`,
      right: `${theme.spacing(1)}px`,
      color: theme.palette.grey[300],
      padding: 0,
    },
    editIcon: {
      color: theme.palette.secondary.main,
    },
    closeIcon: {
      color: theme.palette.error.main,
    },
    checkIcon: {
      color: theme.palette.success.main,
    },
    iconButton: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    card: {
      color: theme.palette.primary.main,
      padding: '40px',
    },
    title: {
      fontWeight: 'bold'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    divider: {
      height: 1,
      width: '100%',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      margin: '20px 0',
    }
  }))

  const styles = useStyles();

  return (
    <Card {...inputProps} className={styles.card}>
      <div className={styles.row}>
        <Typography component="h4" className={styles.title}>
          {title}
        </Typography>

        <div style={{ flexGrow: 1 }} />

        {
          editable ?
            <div>
              <IconButton className={styles.iconButton} disableRipple onClick={() => { setEditable(false); }}>
                <CloseIcon className={styles.closeIcon} />
              </IconButton>

              <IconButton className={styles.iconButton} disableRipple onClick={() => { onAccept && onAccept(() => { setEditable(false) }) }}>
                <CheckIcon className={styles.checkIcon} />
              </IconButton>
            </div>
            :
            <IconButton className={styles.iconButton} disableRipple onClick={() => { setEditable(true); }}>
              <EditOutlinedIcon className={styles.editIcon} />
            </IconButton>
        }

      </div>

      <div className={styles.divider} />

      <EditableContext.Provider value={editable}>
        {children}
      </EditableContext.Provider>
    </Card>
  );
}

EditableCard.propTypes = {
  editable: PropTypes.bool
}

export default EditableCard;
