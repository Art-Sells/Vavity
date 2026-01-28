# Architecture

*Version 1*

## Terminologies:

**VAPA** = Valued Asset Price Anchored

- The highest valued asset price anchored.

**Vatop** = Value At Time Of purchase

- `cVatop`: Value of the asset investment at the time of purchase.
- `cpVatop`: VAPA at the time of purchase.
- `cdVatop`: Difference between `cVact` and `cVatop`: `cdVatop = cVact - cVatop`.
- `acVatop`: Combination of all the `cVatop`s.
- `acdVatop`: Combination of all the `cdVatop`s.

**Vact** = Value At Current Time

- `cVact`: Current value of the asset investment, which starts as `cVatop` and increases as `cpVact` grows. `cVact` = `cVactTaa`*`cpVact`.
- `cpVact`: Current price of the asset; begins as `cpVatop` and adjusts based on the highest asset price observed (VAPA).
- `cVactTaa`: Token amount of the asset available.
- `acVact`: Combination of all `cVact`s.
- `acVactTaa`: Combination of all `cVactTaa`s.

---

## Calculation Scenarios:

### 1. External asset price: $60,000

- **Action:** $500 worth of the external asset investment purchased.
- **Results:**
  - **VAPA** = $60,000.
    - Purchase 1:
      - `cVatop` = $500, `cpVatop` = $60,000, `cVact` = $500, `cpVact` = $60,000.
      - `cVactTaa` = 0.00833 Tokens `cdVatop` = $0.
    - Purchase Totals:
      - `acVatop` = $500
      - `acdVatop` = $0
      - `acVact` = $500
      - `acVactTaa` = 0.00833

### 2. External asset price falls: $54,000

- **Action:** $600 worth of the external asset investment purchased.
- **Results:**
  - **VAPA** = $60,000.
    - Purchase 1:
      - `cVatop` = $1,166, `cpVatop` = $60,000, `cVact` = $1,166, `cpVact` = $60,000.
      - `cVactTaa` = 0.01944, `cdVatop` = $0.
    - Purchase Totals:
      - `acVatop` = $1,166
      - `acdVatop` = $0
      - `acVact` = $1,166
      - `acVactTaa` = 0.01944

### 3. External asset price rises: $65,000

- **Results:**
  - **VAPA** = $65,000.
    - Purchase 1:
      - `cVatop` = $1,166, `cpVatop` = $60,000, `cVact` = $1,263, `cpVact` = $65,000.
      - `cVactTaa` = 0.01944, `cdVatop` = $97.
    - Purchase Totals:
      - `acVatop` = $1,166
      - `acdVatop` = $97
      - `acVact` = $1,263
      - `acVactTaa` = 0.01944

### 4. External asset price falls: $63,000

- **Results:**
  - **VAPA** = $65,000.
    - Purchase 1:
      - `cVatop` = $1,166, `cpVatop` = $60,000, `cVact` = $1,263, `cpVact` = $65,000.
      - `cVactTaa` = 0.01944, `cdVatop` = $97.
    - Purchase Totals:
      - `acVatop` = $1,166
      - `acdVatop` = $97
      - `acVact` = $1,263
      - `acVactTaa` = 0.01944

### 5. External asset price falls: $50,000

- **Action:** $200 worth of the external asset investment purchased.
- **Results:**
  - **VAPA** = $65,000.
    - Purchase 1:
      - `cVatop` = $1,166, `cpVatop` = $60,000, `cVact` = $1,263, `cpVact` = $65,000.
      - `cVactTaa` = 0.01944, `cdVatop` = $97.
    - Purchase 2:
      - `cVatop` = $260, `cpVatop` = $65,000, `cVact` = $260, `cpVact` = $65,000.
      - `cVactTaa` = 0.004, `cdVatop` = $0.
    - Purchase Totals:
      - `acVatop` = $1,426 ($1,166 + $260)
      - `acdVatop` = $97 ($97 + $0)
      - `acVact` = $1,523 ($1,263 + $260)
      - `acVactTaa` = 0.02344 (0.01944 + 0.004)

## In a Nutshell:

If you purchase your investment asset at an external asset price per token at $60k (for example), Vavity autonomously anchors your investment at that price (should the asset price decline) ensuring your investments are bear-market immune. And should the asset price increase, Vavity's anchored pricing system (VAPA) lifts so you ride profits on upswings and protect those profits during downswings.

***With Vavity, you set your investments and forget them (without worrying about bear-market losses).***
