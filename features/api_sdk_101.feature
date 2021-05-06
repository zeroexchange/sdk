Feature: Query The Cross-Chain Oracle

Scenario: I want to query the price of a contract across multiple chains
    Given I have contract address
    When I query the zero_sdk_coin_price function
    Then I receive an array of market prices
    And those prices include:
    | market    | coin  |
    | eth       | zero  | 
    | avax      | zero  | 
    | bsc       | zero  | 