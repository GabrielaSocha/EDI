#arr1 = ["Lexus", "Jeep", "Infiniti", "Mitsubishi", "Chevrolet", "Nissan", "Isuzu", "Lexus", "Pontiac", "Mazda", "Mazda", "Cadillac", "Dodge", "Jaguar", "Mercury", "Hyundai", "Lincoln", "Toyota", "Chevrolet", "Toyota", "Kia", "Audi", "GMC", "Subaru", "Nissan", "GMC", "GMC", "Volvo", "GMC", "Dodge", "Lexus", "Mitsubishi", "Nissan", "Chevrolet", "Ford", "Dodge", "Bentley", "Mercury", "Toyota", "Chevrolet", "Lamborghini", "BMW", "Cadillac", "Cadillac", "Mercury", "Eagle", "Chrysler", "Chevrolet", "Volkswagen", "Ford", "Mercedes-Benz", "Volkswagen", "MINI", "Cadillac", "Hummer", "Land Rover", "Ford", "Honda", "Chevrolet", "Ford", "Toyota", "Pontiac", "Porsche", "Ford", "Honda", "GMC", "Chevrolet", "Ford", "Nissan", "Mercedes-Benz", "Chevrolet", "GMC", "Acura", "GMC", "GMC", "Mercury", "Dodge", "Buick", "Cadillac", "Ford", "Ford", "Ford", "Ford", "Chevrolet", "Volkswagen", "Hyundai", "Chevrolet", "Kia", "Ford", "Audi", "Lincoln", "Audi", "Pontiac", "Mercedes-Benz", "Isuzu", "Porsche", "Kia", "Honda", "Mercedes-Benz", "Infiniti"]

#oś OX - marki
arr = []

variableX = []
for element in arr:
    if element not in variableX:
        variableX.append(element)
    else:
        continue


#oś OY - ilość samochodów danej marki
count = 0
variableY = []
for a in variableX:
    for b in arr:
        if a == b:
            count += 1
    variableY.append(count)
    count = 0

