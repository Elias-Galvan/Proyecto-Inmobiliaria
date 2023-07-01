//TYPES

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGA_CARRITO = "AGREGA_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_PRODUCTOS:
      return { ...state, productos: payload };
    
      case AGREGA_CARRITO:
        const productoExistente = state.carrito.find(
          (item) => item.id === action.payload
        );
      
        if (productoExistente) {
          const newCarrito = state.carrito.map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
      console.log("Desde newCarrito :", newCarrito);
          return {
            ...state,
            carrito: newCarrito,
          };
        } else {
          const producto = state.productos.find((item) => item.id === action.payload);
          const newProduct = { ...producto, quantity: 1 };
          console.log("Desde prducto :", producto);
      
          return {
            ...state,
            carrito: [...state.carrito, newProduct],
          };
        }
    case ELIMINAR_CARRITO:
      
      return {
        ...state,
        carrito: state.carrito.filter((ite) => ite.id !== payload),
      };
  }
}
