# JSluhn: A luhn number generator, validator and calculator in JavaScript

> The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, named after its creator, 
> IBM scientist Hans Peter Luhn, is a simple checksum formula used to validate a variety of identification numbers.

JSLuhn proved to be useful in a development scenario where it was necessary to validate the 9-digit Canadian Business Number during the business registration process. It does the follow:

* Validate a number to see if it is valid according to the luhn algorithm
* Calculate luhn check digits for a given number
* Generate random luhn numbers of any size

# How to use JSLuhn

## Validation

```
validate('32552371')
```

## Calculation
The `Calculate` function returns the the `luhnNumber` (input number + check digit)
```
calculate('32552371')
```

## Generation
The `Generate` function returns a random luhn number of a provided size.
```
generate(9)
```

# References

[Luhn algorithm on wikipedia](https://en.wikipedia.org/wiki/Luhn_algorithm)
