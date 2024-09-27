import {
  Approval as ApprovalEvent,
  InflationTokensMinted as InflationTokensMintedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenUpdated as TokenUpdatedEvent,
  TokensMinted as TokensMintedEvent,
  Transfer as TransferEvent
} from "../generated/WLD/WLD"
import {
  Approval,
  InflationTokensMinted,
  OwnershipTransferStarted,
  OwnershipTransferred,
  TokenUpdated,
  TokensMinted,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInflationTokensMinted(
  event: InflationTokensMintedEvent
): void {
  let entity = new InflationTokensMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenUpdated(event: TokenUpdatedEvent): void {
  let entity = new TokenUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newToken = event.params.newToken
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.existingHolders = event.params.existingHolders
  entity.existingsAmounts = event.params.existingsAmounts
  entity.inflationCapPeriod = event.params.inflationCapPeriod
  entity.inflationCapWad = event.params.inflationCapWad
  entity.inflationLockPeriod = event.params.inflationLockPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensMinted(event: TokensMintedEvent): void {
  let entity = new TokensMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter
  entity.newHolders = event.params.newHolders
  entity.newAmounts = event.params.newAmounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
