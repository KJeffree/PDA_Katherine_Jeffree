### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# 1. the method should named using underscores instead of camel case
# 2. should be if card.value == 1 (noticed after dynamic testing)
# 3. This should be a self. method (noticed after dynamic testing)
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# 1. dif should be def
# 2. card.name should just be card1
# 3. the method has not been indented correctly
# 4. there should be a comma between the parameters card1 and card2
# 5. for card 2 in the else statement, you need a return statement
# 6. This should be a self. method (noticed after dynamic testing)
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end # this end should go at the very end of the file

# 1. total needs to be set to zero -> total = 0
# 2. the return statement needs to sit outside the for loop (between the two ends)
# 3. in the return statement, the total variable needs the method to_s
# 4. the string needs a space at the end so that the value is separated when the string prints out (noticed after dynamic testing)
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
