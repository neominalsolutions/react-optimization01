import React, { useContext } from 'react';
import { CartContext } from './CartProvider';

function useContextDemo() {
	// context bağlanıp, ekrana sepete eklenen ürünlerin listeni getirelim.
	// sepetten çıkar butonu olsun her bir sepetteki ürünün yanında
	// sepetten dediğimizde de layoutdaki sepete total ve ürün adet bilgilerin güncellendiği görelim.

	// https://www.taniarascia.com/using-context-api-in-react/

	return <div>useContextDemo</div>;
}

export default useContextDemo;
