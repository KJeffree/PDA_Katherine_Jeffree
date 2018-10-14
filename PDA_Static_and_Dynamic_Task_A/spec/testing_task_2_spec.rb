require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class TestCard < MiniTest::Test
  def setup()
    @card1 = Card.new('spade', 2)
    @card2 = Card.new('diamond', 1)
    @card3 = Card.new('heart', 8)
    @card4 = Card.new('club', 5)

    @cards = [@card1, @card2, @card3, @card4]
  end

  def test_card__is_ace
    assert_equal(true, CardGame.check_for_ace(@card2))
  end

  def test_card__not_ace
    assert_equal(false, CardGame.check_for_ace(@card1))
  end

  def test_highest_card__card_1_higher
    assert_equal(@card3, CardGame.highest_card(@card3, @card4))
  end

  def test_highest_card__card_2_higher
    assert_equal(@card3, CardGame.highest_card(@card4, @card3))
  end

  def test_cards_total
    assert_equal('You have a total of 16', CardGame.cards_total(@cards))
  end

end
