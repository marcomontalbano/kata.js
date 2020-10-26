# Kata :speech_balloon:

## Exercise

```js

talksWith('Mr. Blue','Mr. Pink')
secret('Mr. Blue','Message1')
ask('Mr. Blue') == 'Message1'
ask('Mr. Pink') == ''
propagate()
ask('Mr. Pink') == 'Message1'
ask('Mr. Blue') == ''

----

talksWith('Mr. Blue','Mr. Brown')
secret('Mr. Blue','Message2')
propagate()
ask('Mr. Pink') == 'Message2'
ask('Mr. Brown') == ''
ask('Mr. Blue') == 'Message2'
propagate()
ask('Mr. Brown') == 'Message2'
ask('Mr. Blue') == ''
ask('Mr. Pink') == ''

----

secret('Mr. Blue', 'Message3')
propagate()
ask('Mr. Pink') == 'Message3'
secret('Mr. Blue', 'Message4')
propagate()
ask('Mr. Pink') == 'Message4'
ask('Mr. Brown') == ''

----

talksWith('Lady Violet','Mr. Blue')
talksWith('Lady Violet','Mr. Brown')
secret('Lady Violet', 'Message5')
propagate()
ask('Mr. Blue') == 'Message5'
ask('Mr. Brown') == 'Message5'
ask('Lady Violet') == ''

----

talksWith('Dr. Black','Mr. Blue')
talksWith('Dr. Black','Mr. Pink')
secret('Dr. Black', 'Message6')
propagate()
ask('Mr. Blue') == 'Message6'
ask('Mr. Pink') == ''
secret('Dr. Black', 'Message7')
propagate()
ask('Mr. Pink') == 'Message6'
propagate()
ask('Mr. Blue') == 'Message7'

----

talkWith('Sir Grey','Dr. Black')
secret('Sir Grey', 'Message8')
propagate()
ask('Dr. Black') == ''
ask('Sir Grey') == 'Message8'

```