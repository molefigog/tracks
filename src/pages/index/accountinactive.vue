<template>
    <div class="container">
        <q-card class="q-my-lg text-center nice-shadow-1">
            <q-card-section>
                <q-icon size="60px" color="negative" name="fas fa-ban"></q-icon> 
                <div class="text-h4 text-bold text-negative q-my-md">
                    Your account is not active
                </div>
                <div class="text-grey">
                    Please contact the system administrator for more information
                </div>
                <q-separator class="q-my-md" />
                <q-btn to="/" no-caps unelevated icon="fas fa-home" color="primary">Continue</q-btn>
            </q-card-section>
        </q-card>
    </div>
</template>
