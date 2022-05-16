nombres = ["pan","queso","arroz","chocolate"]
precios = [120,150,80,200]
nombres_carrito = []
precios_carrito = []

bandera = True


def mostrar_productos_disponibles():
    cantidad = len(nombres)
    print("Productos disponibles:\n")
    for j in range(cantidad):
        print("Producto",j+1)
        print("Nombre:",nombres[j])
        print("Precio", precios[j],"\n")


def mostrar_productos_carrito():
    cantidad = len(nombres_carrito)
    if cantidad>0:
        print("CARRITO:\n")
        for i in range(cantidad):
            print("Producto",i+1)
            print("Nombre:",nombres_carrito[i])
            print("Precio:",precios_carrito[i],"\n")
    else:
        print("No hay productos en el carrito")
        return False



while bandera: 
    print("1-Agregar producto")
    print("2-Remover producto")
    print("3-Añadir al carrito")
    print("4-Remover del carrito")
    print("5-Ver carrito")
    print("6-Cobrar")
    opcion = input("Ingrese una opcion: ")

    if(opcion== "1"):
        nombre_producto = input("Ingrese nombre del producto: ")
        precio_producto = int(input("Ingrese precio del producto: "))
        
        nombres.append(nombre_producto)
        precios.append(precio_producto)

        print("Producto agregado satisfactoriamente")

    elif(opcion== "2"):
        mostrar_productos_disponibles()
        identificador = int(input("Ingrese el numero de producto que desea remover: "))

        if identificador>0 and identificador<=len(nombres):
            print("Está seguro que desea eliminar el producto",identificador,"?")
            print("1-Si")
            print("2-No")
            opcion3 = input("")

            if (opcion3=="1" or opcion3=="si"):
                nombres.pop(identificador-1)
                precios.pop(identificador-1)
                print("El producto",identificador, "se ha removido")

        else:
            print("El producto", identificador, "no existe")
       

    elif(opcion== "3"):
        mostrar_productos_disponibles()
        producto_carrito = int(input("Ingrese el numero de producto que desea agregar al carrito: "))

        if producto_carrito>0 and producto_carrito<=len(nombres):
            nombres_carrito.append(nombres[producto_carrito-1])
            precios_carrito.append(precios[producto_carrito-1])
            print("Producto agregado satisfactoriamente")

        else:
            print("El producto", producto_carrito, "no existe")
        print

    elif(opcion== "4"):
        evaluar = mostrar_productos_carrito()
        if evaluar != False:
            identificador2 = int(input("Ingrese el numero de producto que desea remover del carrito: "))

            if identificador2>0 and identificador2<=len(nombres_carrito):
                print("Está seguro que desea eliminar el producto",identificador2,"del carrito?")
                print("1-Si")
                print("2-No")
                opcion4 = input("")

                if (opcion4=="1" or opcion4=="si"):
                    nombres_carrito.pop(identificador2-1)
                    precios_carrito.pop(identificador2-1)
                    print("El producto",identificador2, "se ha removido del carrito")

            else:
                print("El producto", identificador2, "no existe")
    
    elif(opcion== "5"):
        mostrar_productos_carrito()

    elif(opcion== "6"):
        cantidad = len(nombres_carrito)
        contador = 0
        for k in range(cantidad):
            contador += precios_carrito[k]
        
        print("El total de su compra es:",contador,"pesos")
        print("Desea abonar su compra?")
        print("1-Si")
        print("2-No")
        opcion5 = input("")

        if opcion5=="1" or opcion5=="si":
            print("El pago se realizó correctamente. Muchas gracias por su compra")
            break;
        else:
            print("El pago ha sido cancelado")


    else:
        print("Opcion no valida")

    opcion2 = input("Desea realizar otra operación? 1-Si, 2-No : ")
    if (opcion2 != "1"):
        break

