//
//  CommentCell.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 20..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class CommentCell: UICollectionViewCell {
    let profileImgView: UIImageView = {
        let iv = UIImageView()
        iv.backgroundColor = UIColor.lightGray
        
        return iv
    }()
    
    let idLabel: UILabel = {
        let label = UILabel()
        label.text = "안녕나는성은뀨><"
        return label
    }()
    
    let dateLabel: UILabel = {
        let label = UILabel()
        label.font = UIFont.systemFont(ofSize: 12)
        label.textColor = .lightGray
        return label
    }()
    
    let bodyTextView: UITextView = {
        let tv = UITextView()
        tv.isScrollEnabled = false
        tv.isEditable = false
        tv.isSelectable = false
        tv.backgroundColor = .clear
        tv.isUserInteractionEnabled = false
        tv.text = "맛이 있겠다뀨. 같이 가자뀨. 쓸 말이 없다뀨. 두줄은 채워야 할 것 같다뀨. 이정도면 두줄이 되었을것같지만 혹시 모르니까 좀 더 써본다뀨."
        return tv
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
        
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupViews() {
        addSubview(profileImgView)
        addSubview(idLabel)
        addSubview(dateLabel)
        addSubview(bodyTextView)
        
        
    }
}
