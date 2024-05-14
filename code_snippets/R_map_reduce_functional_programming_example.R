# Load library
library(purrr)

# Define input values
x <- 1:10

# For each value in x compute y_i=sqrt(x_i)
y <- x %>% map_dbl(sqrt)
# y: [1] 1.000000 1.414214 1.732051 2.000000 2.236068 2.449490 2.645751 2.828427 3.000000 3.162278

# Compute the sum of values in vector y
z <- y %>% reduce(`+`)
# z: 22.46828
