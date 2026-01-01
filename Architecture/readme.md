# Architecture

*Version 1*

## Terminologies:

**VAPA** = Valued Asset Price Anchored

- The highest valued asset price anchored.

**VAPAA** = Valued Asset Price Anchored Asset

- The highest valued asset price anchored address

**Vatoc** = Value At Time Of Connection

- `cVatoc`: Value of the asset investment at the time of connection.
- `cpVatoc`: VAPA at the time of connection.
- `cdVatoc`: Difference between `cVact` and `cVatoc`: `cdVatoc = cVact - cVatoc`.
- `acVatoc`: Combination of all the `cVatoc`s.
- `acdVatoc`: Combination of all the `cdVatoc`s.
- `cVatoi`: Value of the asset investment at the time of import.
- `cpVatoi`: VAPA at the time of import.
- `cdVatoi`: Difference between `cVact` and `cVatoi`: `cdVatoi = cVact - cVatoi`.
- `acVatoi`: Combination of all the `cVatoi`s.
- `acdVatoi`: Combination of all the `cdVatoi`s.

**Vact** = Value At Current Time

- `cVact`: Current value of the asset investment, which starts as `cVatoc` and increases as `cpVact` grows. `cVact` = `cVactTaa`*`cpVact`.
- `cpVact`: Current price of the asset; begins as `cpVatoc` and adjusts based on the highest asset price observed (VAPA).
- `cVactTaa`: Token amount of the asset available.
- `acVact`: Combination of all `cVact`s.
- `acVactTaa`: Combination of all `cVactTaa`s.

---

## Calculation Scenarios:

### 1. External asset price: $60,000

- **Action:** $500 worth of the external asset investment connected.
- **Results:**
  - **VAPA** = $60,000.
    - Wallet 1:
      - `VAPAA` = 1
        - `cVatoc` = $500, `cpVatoc` = $60,000, `cVact` = $500, `cpVact` = $60,000.
        - `cVactTaa` = 0.00833 Tokens `cdVatoc` = $0.
    - Wallet Totals:
      - `VAPAA` = 1
        - `acVatoc` = $500
        - `acdVatoc` = $0
        - `acVact` = $500
        - `acVactTaa` = 0.00833

### 2. External asset price falls: $54,000

- **Action:** $600 worth of the external asset investment connected.
- **Results:**
  - **VAPA** = $60,000.
    - Wallet 1:
      - `VAPAA` = 1
        - `cVatoc` = $1,166, `cpVatoc` = $60,000, `cVact` = $1,166, `cpVact` = $60,000.
        - `cVactTaa` = 0.01944, `cdVatoc` = $0.
    - Wallet Totals:
      - `VAPAA` = 1
        - `acVatoc` = $1,166
        - `acdVatoc` = $0
        - `acVact` = $1,166
        - `acVactTaa` = 0.01944


### 3. External asset price rises: $65,000

- **Results:**
  - **VAPA** = $65,000.
    - Wallet 1:
      - `VAPAA` = 1
        - `cVatoc` = $1,166, `cpVatoc` = $60,000, `cVact` = $1,263, `cpVact` = $65,000.
        - `cVactTaa` = 0.01944, `cdVatoc` = $97.
    - Wallet Totals:
      - `VAPAA` = 1
        - `acVatoc` = $1,166
        - `acdVatoc` = $97
        - `acVact` = $1,263
        - `acVactTaa` = 0.01944

### 4. External asset price falls: $63,000

- **Results:**
  - **VAPA** = $65,000.
    - Wallet 1:
      - `VAPAA` = 1
        - `cVatoc` = $1,166, `cpVatoc` = $60,000, `cVact` = $1,263, `cpVact` = $65,000.
        - `cVactTaa` = 0.01944, `cdVatoc` = $97.
    - Wallet Totals:
      - `VAPAA` = 1
        - `acVatoc` = $1,166
        - `acdVatoc` = $97
        - `acVact` = $1,263
        - `acVactTaa` = 0.01944

### 5. External asset price falls: $50,000

- **Action:** New Wallet created and $200 worth of the external asset investment connected.
- **Results:**
  - **VAPA** = $65,000.
    - Wallet 1:
      - `VAPAA` = 1
        - `cVatoc` = $1,166, `cpVatoc` = $60,000, `cVact` = $1,263, `cpVact` = $65,000.
        - `cVactTaa` = 0.01944, `cdVatoc` = $97.
    - Wallet 2:
      - `VAPAA` = 1
        - `cVatoc` = $260, `cpVatoc` = $65,000, `cVact` = $260, `cpVact` = $65,000.
        - `cVactTaa` = 0.004, `cdVatoc` = $0.
    - Wallet Totals:
      - `VAPAA` = 1
        - `acVatoc` = $1,426 ($1,166 + $260)
        - `acdVatoc` = $97 ($97 + $0)
        - `acVact` = $1,523 ($1,263 + $260)
        - `acVactTaa` = 0.02344 (0.01944 + 0.004)

## In a Nutshell:

If you connect your investment asset at an external asset price per token at $60k (for example), Vavity autonomously anchors your investment at that price (should the asset price decline) ensuring your investments are bear-market immune. And should the asset price increase, Vavity's anchored pricing system (VAPA) lifts so you ride profits on upswings and protect those profits during downswings.

***With Vavity, you set your investments and forget them (without worrying about bear-market losses).***
