//
//  locationCell.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 16..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class LocationCell: UICollectionViewCell {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    let locationLabel: UILabel = {
        let label = UILabel()
        label.text = "홍대"
        label.textAlignment = .center
        return label
    }()
    
    
    func setupViews() {
        addSubview(locationLabel)
        
        layer.cornerRadius = 8
        
        addConstraints(with: "H:|[v0]|", views: locationLabel)
        addConstraints(with: "V:|[v0]|", views: locationLabel)
    }
}
