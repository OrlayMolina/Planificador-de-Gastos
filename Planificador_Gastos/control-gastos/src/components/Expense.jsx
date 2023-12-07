import PropTypes from 'prop-types';
import { LeadingActions, 
  SwipeableList, 
  SwipeableListItem,
  SwipeAction, 
  TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from '../helpers';
import iconSaving from '../img/icono_ahorro.svg';
import iconHouse from '../img/icono_casa.svg';
import iconFood from '../img/icono_comida.svg';
import iconExpenses from '../img/icono_gastos.svg';
import iconLeisure from '../img/icono_ocio.svg';
import iconHealth from '../img/icono_salud.svg';
import iconSubs from '../img/icono_suscripciones.svg';

const dictionary = {
    ahorro: iconSaving,
    casa: iconHouse,
    comida: iconFood,
    gastos: iconExpenses,
    ocio: iconLeisure,
    salud: iconHealth,
    suscripciones: iconSubs,
}

const Expense = ({ expense, setExpenseEdit }) => {

    const { category, amount, name, date } = expense;

    const leadingActions = () => (
        <LeadingActions >
            <SwipeAction onClick={() => setExpenseEdit(expense)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions >
            <SwipeAction onClick={() => console.log('Borrar...')}>
                Eliminar
            </SwipeAction>
        </TrailingActions>

    );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">

            <img 
                src={dictionary[category]} 
                alt="Icono Gasto" 
            />

            <div className="descripcion-gasto">
                <p className="categoria">{category}</p>
                <p className='nombre-gasto'>{name}</p>
                <p className='fecha-gasto'>Agregado el: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
            
          </div>
          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
    setExpenseEdit: PropTypes.func.isRequired,  
};

export default Expense
